import React, { Component } from "react";
import { object } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getState } from "../redux/actions/app";
import { Switch, Route, withRouter } from "react-router-dom";
import { Col, Icon, Layout, Row, Tabs } from "antd";
import { Information } from "./Information";
import { RegistrationForm } from "./Registration";
import { Participants } from "./Participants";
import { Aux, Spinner } from "./../utils";

const { Header, Content, Footer } = Layout;
const TabPane = Tabs.TabPane;

const HeaderLabel = {
  cv: "9-й лагерь чувашского языка «Хавал»",
  ru: "9-й лагерь чувашского языка «Хавал»",
  en: "9-й лагерь чувашского языка «Хавал»"
};
const SubHeaderLabel = {
  cv: "8-15 июля 2018 г",
  ru: "8-15 июля 2018 г",
  en: "8-15 июля 2018 г"
};
const FooterLabel = {
  cv: '© "Хавал" чăваш халăх пĕрлешĕвĕ 2018',
  ru: '© Чувашская общественная организация "Хавал" 2018',
  en: '© "Khaval" Chuvash movement 2018'
};
const CreatedBy = <p>Created by Evgeny Belkin <a href="https://github.com/sunafajro/khaval-camp-app" target="_blank" rel="noopener noreferrer"><Icon type="github" /></a></p>;

class App extends Component {
  state = {
    tabKey: "information"
  };

  static propTypes = {
    history: object.isRequired,
    location: object.isRequired,
    match: object.isRequired
  };

  componentWillMount() {
    const route = this.props.location.pathname.split("/").pop();
    const tabKey = !route ? "information" : route;
    this.setState({ tabKey });
  }

  componentWillReceiveProps(newProps) {
    document.title = HeaderLabel[this.props.lang];
    const route = newProps.location.pathname.split("/").pop();
    const tabKey = !route ? "information" : route;
    this.setState({ tabKey });
  }

  componentDidMount() {
    this.props.getState();
  }

  render() {
    const { tabKey } = this.state;
    const { appLoaded, history, lang } = this.props;

    return (
      <Aux>
        {!appLoaded ? (
          <Spinner />
        ) : (
          <Layout style={{ backgroundColor: "#ffffff" }}>
            <Header
              style={{
                height: "100px",
                backgroundColor: "#209cee",
                padding: "20px 0"
              }}
            >
              <Col
                xs={{ span: 22, offset: 1 }}
                sm={{ span: 22, offset: 1 }}
                md={{ span: 22, offset: 1 }}
                lg={{ span: 18, offset: 3 }}
                xl={{ span: 16, offset: 4 }}
              >
                <h1 style={{ color: "#ffffff", lineHeight: "1em" }}>
                  {HeaderLabel[lang]}
                </h1>
                <h2
                  style={{
                    color: "#ffffff",
                    lineHeight: "1em",
                    marginTop: "-0.5em"
                  }}
                >
                  {SubHeaderLabel[lang]}
                </h2>
              </Col>
            </Header>
            <Content>
              <Row>
                <Col
                  xs={{ span: 22, offset: 1 }}
                  sm={{ span: 22, offset: 1 }}
                  md={{ span: 22, offset: 1 }}
                  lg={{ span: 18, offset: 3 }}
                  xl={{ span: 16, offset: 4 }}
                >
                  <Switch>
                    <Tabs
                      activeKey={tabKey}
                      onChange={key => history.push("/" + key)}
                    >
                      <TabPane tab="Информация" key="information">
                        <Route
                          path="/"
                          render={props => (
                            <Information lang={lang} {...props} />
                          )}
                        />
                      </TabPane>
                      <TabPane tab="Регистрация" key="registration">
                        <Route
                          exact
                          path="/registration"
                          render={props => (
                            <RegistrationForm lang={lang} {...props} />
                          )}
                        />
                      </TabPane>
                      <TabPane tab="Участники" key="participants">
                        <Route
                          exact
                          path="/participants"
                          render={props => (
                            <Participants lang={lang} {...props} />
                          )}
                        />
                      </TabPane>
                    </Tabs>
                  </Switch>
                </Col>
              </Row>
            </Content>
            <Footer style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
              {FooterLabel[lang]}
              { CreatedBy }
            </Footer>
          </Layout>
        )}
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  appLoaded: state.app.appLoaded,
  //data: state.app.data,
  error: state.app.error,
  fetching: state.app.fetching,
  //labels: state.app.labels,
  lang: state.app.lang,
  loggedIn: state.app.loggedIn
  //user: state.app.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getState
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
