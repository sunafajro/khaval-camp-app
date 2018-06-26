import React, { Component } from "react";
import { array, bool, func, object, string } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  createRegistration,
  getFormElements,
  getOccupiedRooms
} from "../../redux/actions/registrations";
import { Button, Col, message, Modal, Row, Tooltip } from "antd";
import Moment from "moment";
import Recaptcha from "react-grecaptcha";
import { FormElement } from "./FormElement";
import { calculateCost } from "./Utils";
import { Aux, Spinner } from "../../utils";

const emptyForm = {
  lastNameEl: "",
  firstNameEl: "",
  chuvashNameEl: "",
  sexEl: "",
  birthdateEl: Moment(),
  phoneEl: "",
  emailEl: "",
  socialEl: "",
  cityEl: "",
  countryEl: "",
  levelEl: "",
  residenceEl: "",
  roomEl: "",
  durationEl: "",
  foodEl: "",
  paymentEl: "",
  jobEl: ""
};

class RegForm extends Component {
  state = {
    form: { ...emptyForm },
    num: 1,
    recaptchaResponse: "",
    showRecaptcha: false,
    totalCostParts: "0 + 0 + 0 + 0",
    totalCost: 0,
    visible: false
  };

  static propTypes = {
    creating: bool.isRequired,
    elements: array.isRequired,
    error: string.isRequired,
    fetching: bool.isRequired,
    fetchingRooms: bool.isRequired,
    getFormElements: func.isRequired,
    getOccupiedRooms: func.isRequired,
    history: object.isRequired,
    lang: string.isRequired,
    location: object.isRequired,
    match: object.isRequired,
    occupiedRooms: object.isRequired,
    registration: object.isRequired
  };

  componentDidMount() {
    this.props.getFormElements();
    this.props.getOccupiedRooms();
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.registration).length && !nextProps.error) {
      window.grecaptcha.reset();
      this.setState({
        form: { ...emptyForm },
        message: {},
        num: 1,
        recaptchaResponse: "",
        totalCost: 0,
        totalCostParts: "0 + 0 + 0 + 0",
        visible: false
      });
    }
    if (nextProps.error) {
      window.grecaptcha.reset();
    }
  }

  validateInput = () => {
    const age = Moment().diff(this.state.form.birthdateEl, "years");
    let result = true;
    Object.keys(this.state.form).forEach(item => {
      if (!this.state.form[item]) {
        if (
          item !== "roomEl" &&
          item !== "jobEl" &&
          item !== "chuvasNameEl" &&
          item !== "socialEl"
        ) {
          result = false;
        } else {
          if (
            item === "roomEl" &&
            (this.state.form.residenceEl === "corp20" ||
              this.state.form.residenceEl === "zabava")
          ) {
            result = false;
          }
          if (item === "jobEl" && age > 17) {
            result = false;
          }
        }
      }
    });
    return result;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validateInput()) {
      let data = {};
      Object.keys(this.state.form).forEach(item => {
        data[item.substr(0, item.length - 2)] = this.state.form[item];
      });
      data.birthdate = Moment(this.state.form.birthdateEl).format("YYYY-MM-DD");
      this.props.createRegistration(data);
    } else {
      message.error("Поля формы должны быть заполнены!");
    }
  };

  handleChange = (value, key) => {
    let form = { ...this.state.form };
    form[key] = value;
    const { totalCost, totalCostParts } = calculateCost(
      form.birthdateEl,
      form.durationEl,
      form.residenceEl,
      form.jobEl
    );
    if (key === "residenceEl") {
      form.roomEl = "";
      if (value === "corp20" || value === "zabava") {
        this.props.getOccupiedRooms();
      }
    }
    if (!this.state.showRecaptcha) {
      this.setState({ form, showRecaptcha: true, totalCost, totalCostParts });
    } else {
      this.setState({ form, totalCost, totalCostParts });
    }
  };

  verifyCallback = response => this.setState({ recaptchaResponse: response });
  expiredCallback = () => {
    console.log("request expired");
  };

  showImage = () => {
    this.setState({ num: 1, visible: true });
  };

  closeImage = () => {
    this.setState({ visible: false });
  };

  nextImage = () => {
    let num = this.state.num;
    if (num > 0 && num < 4) {
      num = num + 1;
    } else {
      num = 1;
    }
    this.setState({ num });
  };

  render() {
    const {
      form,
      num,
      recaptchaResponse,
      showRecaptcha,
      totalCost,
      totalCostParts,
      visible
    } = this.state;
    const {
      creating,
      elements,
      fetching,
      fetchingRooms,
      lang,
      occupiedRooms
    } = this.props;
    return (
      <Aux>
        <div>
          {fetching ? (
            <Spinner />
          ) : (
            elements.map(el => {
              return (
                <FormElement
                  birthDate={form.birthdateEl}
                  fetchingRooms={fetchingRooms}
                  handleChange={this.handleChange}
                  id={el.id}
                  items={el.items}
                  key={el.id}
                  label={el.label}
                  lang={lang}
                  occupiedRooms={occupiedRooms}
                  residence={form.residenceEl}
                  showImage={this.showImage}
                  state={creating}
                  type={el.type}
                  value={form[el.id]}
                />
              );
            })
          )}
          {showRecaptcha ? (
            <Recaptcha
              sitekey={"6LcaGUQUAAAAAAYqfwQdwGZBd-YWYRpNc6EObT1s"}
              callback={this.verifyCallback}
              expiredCallback={this.expiredCallback}
              locale="ru_RU"
              className="customClassName"
            />
          ) : null}
          <Row style={{ marginTop: "1em" }}>
            <Col span={12}>
              <Button
                type="primary"
                className="pure-button pure-button-primary"
                disabled={recaptchaResponse ? false : true}
                onClick={this.handleSubmit}
              >
                Зарегистрироваться
              </Button>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Tooltip title={totalCostParts}>
                <span style={{ fontWeight: "600" }}>{totalCost} р.</span>
              </Tooltip>
            </Col>
          </Row>
        </div>
        {form.residenceEl ? (
          <Modal
            onCancel={this.closeImage}
            onOk={this.closeImage}
            title={
              form.residenceEl === "zabava" ? "Корпус «Забава»" : "Корпус «№20»"
            }
            visible={visible}
          >
            <img
              onClick={this.nextImage}
              style={{ width: "100%" }}
              src={"./images/" + form.residenceEl + "-" + num + ".jpg"}
              alt={"zabava-" + num + ".jpg"}
            />
            <p>
              <a
                href="http://surskie-zori.ru/%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Подробности на сайте базы "Сурские зори"
              </a>
            </p>
          </Modal>
        ) : null}
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  creating: state.registrations.creating,
  elements: state.registrations.elements,
  error: state.registrations.error,
  fetching: state.registrations.fetching,
  fetchingRooms: state.registrations.fetching,
  occupiedRooms: state.registrations.occupiedRooms,
  registration: state.registrations.registration
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createRegistration,
      getFormElements,
      getOccupiedRooms
    },
    dispatch
  );

export const RegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegForm);
