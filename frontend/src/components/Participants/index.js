import React, { Component } from "react";
import { array, bool, func, object, string } from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getRegistrations } from "../../redux/actions/registrations";
import { Table } from "antd";
import { columns } from "./columns";

class ParticipantsTable extends Component {
  static propTypes = {
    error: string.isRequired,
    fetching: bool.isRequired,
    getRegistrations: func.isRequired,
    history: object.isRequired,
    lang: string.isRequired,
    location: object.isRequired,
    match: object.isRequired,
    registrations: array.isRequired,
  }

  componentDidMount() {
    this.props.getRegistrations();
  }

  render() {
    const { fetching, registrations } = this.props;
    return (
      <div>
        <Table columns={columns} dataSource={registrations} loading={fetching} size="small" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.registrations.error,
  fetching: state.registrations.fetching,
  registrations: state.registrations.registrations,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRegistrations
    },
    dispatch
  );

export const Participants = connect(mapStateToProps, mapDispatchToProps)(
  ParticipantsTable
);
