//selenium server to start/update
//webdriver-manager update
//webdriver-manager start

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./new_project_declaration.js'] ,
    
    multiCapabilities: [ {
        browserName: 'firefox'
    },/* {
        browserName: 'chrome'
    }*/]
}