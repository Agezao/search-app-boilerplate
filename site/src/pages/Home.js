import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {
  Box,
} from "@chakra-ui/core";
import Topbar from '../components/Topbar';
import AthleteSearch from '../components/AthleteSearch';

export default class extends Component {
  state = { };

  render() {
    return (
      <div>
        <Helmet>
          <title>Home • SearchApp</title>
        </Helmet>

        <Topbar {...this.props} />

        <Box
          margin="0 auto"
          maxW="6xl"
          p={6}
          overflow="hidden"
        >
          <AthleteSearch />
        </Box>
      </div>
    );
  }
};
