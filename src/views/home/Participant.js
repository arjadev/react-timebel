import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Avatar,
  withStyles,
  Badge
} from '@material-ui/core';
import CircularProgress from '../../components/CircularProgress';
import { PARTICIPANTS } from 'src/utils/mock';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  },
}))(Badge);

function Paricipant({ className, ...rest }) {

  return (
    <Box mt={3}>
      <Card>
        <CardHeader title="Participant" />
        <Divider />

        <CardContent>
          <Table>
            <TableBody>
              {PARTICIPANTS.map((user) => (
                <TableRow
                  hover
                  key={user.id}
                >
                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        variant="dot"
                        >
                        <Avatar alt="Remy Sharp" src={user.image} />
                    </StyledBadge>
                      <Box ml={2}>
                        <Typography
                          variant="h6"
                          color="textPrimary"
                        >
                          {user.name}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <Box mr={2}>
                        <Typography
                          align="right"
                          variant="h6"
                          color="textPrimary"
                        >
                          {user.battery}
                            %
                        </Typography>
                      </Box>
                      <CircularProgress value={user.battery} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </CardContent>
      </Card>
    </Box>
  );
}

Paricipant.propTypes = {
  className: PropTypes.string
};

export default Paricipant;
