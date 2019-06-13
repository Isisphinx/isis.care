import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Helmet from 'react-helmet'
import Contact from '../components/Contact2'

interface TabContainerProps {
  children?: React.ReactNode
}

const TabContainer = (props: TabContainerProps) => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>
)

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

const SimpleTabs = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue)
  }

  return (
    <div>
      <Helmet title={'Title'} meta={[{ name: 'description', content: 'Contact Center Isis' }]} />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Isis.Care
            </Typography>
          </Toolbar>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Accueil" />
            <Tab label="Solution" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && (
          <TabContainer>
            <Contact />
          </TabContainer>
        )}
      </div>
    </div>
  )
}

export default SimpleTabs
