const { browser } = require("protractor");

describe('New Project Declaration', function() {
    it("Declaration of a new project", function(){
        //Opening of the startup page 
        browser.driver.get("http://localhost:4200/");
        browser.driver.findElement(By.id("new-project-link")).click();
        browser.driver.findElement(By.id("project_name")).sendKeys("Project name_e2e test");
        browser.driver.findElement(By.css(".goalDropdownItem:nth-child(4)")).click();
        browser.driver.findElement(By.id("project_description")).sendKeys("Project description_e2e test");
        browser.driver.findElement(By.id("project_url")).sendKeys("Project url_e2e test");
        browser.driver.findElement(By.id("project_comments")).sendKeys("Project comments_e2e test");
        
        browser.driver.findElement(By.id("submit_new_project_data")).click();
        browser.driver.sleep(5000);

        //checking on the presence of the successful database update message.        
        let e22TestElement = browser.driver.findElement(by.id("succesfulDatabaseUpdateMessage"));
        let textInElement = e22TestElement.getText();
        expect(textInElement).toBe("SUCCESS:Database update.");

        //Going back to the home page to check, then to the page diplaying all the projects
        browser.driver.get("http://localhost:4200/");
        browser.driver.get("http://localhost:4200/all-projects");
        browser.driver.sleep(5000);

        e22TestElement = browser.driver.findElement(by.id("e2eNewProjectTest"));
        textInElement = e22TestElement.getText();
        expect(textInElement).toBe("Project name_e2e testProject description_e2e test8Project url_e2e testProject comments_e2e test");
        
    });

});
