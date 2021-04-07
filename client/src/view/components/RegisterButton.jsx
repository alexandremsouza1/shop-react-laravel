import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const RegisterButton = withStyles({
    root: {
      color:'#fff',
      backgroundColor:'#28a745',
      '&:hover':{
        backgroundColor:'#218838',
        color:'#fff'
      }
    }
  })(Button)

  export default RegisterButton