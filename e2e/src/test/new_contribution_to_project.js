const { browser } = require("protractor");

describe('New Project Contribution Declaration', function() {
    it("Declaration of a new project contribution", function(){
        //Opening of the startup page 
        browser.driver.get("http://localhost:4200/");
        browser.driver.findElement(By.id("new-project-contribution")).click();
        browser.driver.findElement(By.id("employee_firstName")).sendKeys("Employee_First name_e2e test");
        browser.driver.findElement(By.id("employee_lastName")).sendKeys("Employee_Last name_e2e test");
        browser.driver.findElement(By.css(".projectDropdownItem:nth-child(1)")).click();

        browser.driver.findElement(By.id("submitEmployeeData")).click();
        browser.driver.sleep(5000);

        //checking on the presence of the successful database update message.        
        let e22TestElement = browser.driver.findElement(by.id("succesfulDatabaseUpdateMessage"));
        let textInElement = e22TestElement.getText();
        expect(textInElement).toBe("SUCCESS:Database update.");

        //Going back to the home page to check, then to the page diplaying all the projects
        /*
        browser.driver.get("http://localhost:4200/");
        browser.driver.get("http://localhost:4200/all-projects");
        browser.driver.sleep(5000);

        e22TestElement = browser.driver.findElement(by.id("e2eNewProjectTest"));
        textInElement = e22TestElement.getText();
        expect(textInElement).toBe("Project name_e2e testProject description_e2e test8Project url_e2e testProject comments_e2e test");
        */
    });

});
