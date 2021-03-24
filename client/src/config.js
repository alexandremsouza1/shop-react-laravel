class Theme {

  constructor(createMuiTheme){
    this.createMuiTheme = createMuiTheme
  }

  getTema(){
    return this.createMuiTheme({
      palette: {
        primary: {
         main: '#1976d2',
        }
      },
    });
  }
}
export default Theme;