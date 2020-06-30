import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Skeleton,
  Badge,
  Text,
  Input,
  Button,
} from "@chakra-ui/core";
import moment from 'moment';
import athleteService from '../services/athlete.service';

export default class extends Component {
  state = {
    athletes: [],
    filter: { },
    loading: true,
  }

  constructor(props) {
    super(props);

    this.loadAthletes();
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.loadAthletes = this.loadAthletes.bind(this);
  }

  async loadAthletes() {
    this.setState({ loading: true });

    const athletes = await athleteService.get(this.state.filter);

    this.setState({ athletes, loading: false });
  }

  handleFilterChange(ev) {
    const { filter } = this.state;

    if (ev.target.value) filter[ev.target.id] = ev.target.value;
    else delete filter[ev.target.id];

    this.setState({ filter });
  }

  render() {
    if (this.state.loading) {
      return (
      <Box
        width="100%"
      >
        <Heading marginBottom={3} size="xl">Athletes</Heading>
        <Skeleton height="100px"></Skeleton>
        <Skeleton height="100px" marginTop={4}></Skeleton>
        <Skeleton height="100px" marginTop={4}></Skeleton>
        <Skeleton height="100px" marginTop={4}></Skeleton>
      </Box>);
    }

    return (
      <Box
        width="100%"
      >
        <Box d="flex" justifyContent="space-between" >
          <Heading marginBottom={3} size="xl">Athletes</Heading>
        </Box>

        <AthleteFilters handleChange={this.handleFilterChange} filter={this.state.filter} onSearch={this.loadAthletes} />

        { this.state.athletes.map(athlete => <Athlete athlete={athlete} />) } 
      </Box>
    );
  }
}

const AthleteFilters = ({ handleChange, filter, onSearch} = {}) => {
  return (
    <Box
      marginBottom={4}
    >
      <Heading as="h3" size="lg">
        Filters
      </Heading>

      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Box>
          <Text fontSize="md" fontWeight={600}>Name</Text>
          <Input id="name" placeholder="Athlete name" value={filter.name} onChange={(e) => handleChange(e)}/>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight={600}>Years of experience</Text>
          <Input id="professionalExperienceYears" type="number" placeholder="6" value={filter.professionalExperienceYears} onChange={(e) => handleChange(e)}/>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight={600}>Min. Age</Text>
          <Input id="ageRangeStart" type="number" placeholder="22" value={filter.ageRangeStart} onChange={(e) => handleChange(e)}/>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight={600}>Max. Age</Text>
          <Input id="ageRangeEnd" type="number" placeholder="30" value={filter.ageRangeEnd} onChange={(e) => handleChange(e)}/>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight={600}>Skills</Text>
          <Input id="skills" placeholder={`["Snowboarding", "Skiing"]`} value={filter.skills} onChange={(e) => handleChange(e)}/>
        </Box>

        <Box>
          <Button
            variantColor="blue"
            variant="solid"
            width="100%"
            onClick={(e) => onSearch(e)}
          >
            Filter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Athlete = ({ athlete } = {}) => {
  return (
    <Box
      minHeight="50px"
      border="2px"
      backgroundColor="transparent"
      px={6}
      py={4}
      marginBottom={4}
      rounded={5}
    >
      <Heading as="h3" size="lg">
        { athlete.name }
      </Heading>

      <Box d="flex" alignItems="baseline" marginTop={1}>
        <Badge rounded="full" px="3" variantColor="blue" color="white">
          born - { moment.utc(athlete.birthDate).format('MM/DD/yyyy') } ({moment.utc().diff(athlete.birthDate, 'years')} y.o)
        </Badge>
        <Badge rounded="full" px="3" variantColor="blue" color="white" marginLeft={1}>
          {moment.utc('2020-01-01').diff(athlete.firstProfessionalExperienceDate, 'years')} years of experience
        </Badge>
      </Box>

      <Box
        marginTop={2}
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        ml="2"
      >
        { athlete.skills && athlete.skills.length > 0 && (
          <Box>
            <Text fontSize="md" as="h3">&gt; Skills</Text>

            { athlete.skills.map(skill => (
              <Badge rounded="full" px="3" marginRight={2} marginTop={2} textTransform="none">
                {skill.name}
              </Badge>
            ))}
          </Box>
        )}
      </Box>

      <Box
        marginTop={2}
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        ml="2"
      >
        { athlete.championships && athlete.championships.length > 0 && (
          <Box>
            <Text fontSize="md" as="h3">&gt; Championships</Text>

            { athlete.championships.map(championship => (
              <Badge rounded="full" px="3" marginRight={2} marginTop={2}>
                {championship.name} - {moment.utc(championship.year).year()}
              </Badge>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};
