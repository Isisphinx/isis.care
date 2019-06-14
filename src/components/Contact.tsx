import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Face from '../images/face-small.png'
import ScreenShare from '@material-ui/icons/ScreenShare'

const useStyles = makeStyles((theme: Theme) => ({
  bigAvatar: {
    width: 70,
    height: 70,
  },
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar src={Face} aria-label="Isis" className={classes.bigAvatar} />}
          title="Team"
          subheader="Contactez notre équipe"
        />
        <CardContent>
          <List component="nav">
            <ListItem
              button
              onClick={() => {
                try {
                  Intercom('show') // eslint-disable-line no-undef
                } catch (error) {
                  console.log(error)
                }
              }}
            >
              <ListItemIcon>
                <QuestionAnswerIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={'Chat'} secondary={'Essayez ça en premier ;-)'} />
            </ListItem>
            <li>
              <Divider inset />
            </li>
            <ListItem button component="a" href="tel:+33755536633">
              <ListItemIcon>
                <CallIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="07 55 53 66 33" />
              <ListItemSecondaryAction>
                <IconButton aria-label="SMS" component="a" href="sms:+33755536633">
                  <MessageIcon color="primary" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem button component="a" href="mailto:team@isis.care">
              <ListItemIcon>
                <EmailIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="team@isis.care" />
            </ListItem>
            <ListItem
              button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/xqZPLa28KxB2"
            >
              <ListItemIcon>
                <LocationOnIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography component="span" color="textSecondary">
                      386 avenue de Dunkerque
                    </Typography>
                    <Typography component="span" color="textSecondary">
                      59130 Lambersart - France
                    </Typography>
                  </React.Fragment>
                }
                primary={'Isisphinx'}
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions disableActionSpacing>
          <IconButton
            aria-label="Teamviewer QS"
            button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://898.tv/isisqs"
          >
            <ScreenShare color="primary" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Contact
