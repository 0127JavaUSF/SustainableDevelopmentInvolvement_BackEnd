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

        //Going back to the home page to check, then to the page diplaying all the projects
        browser.driver.get("http://localhost:4200/");
        browser.driver.get("http://localhost:4200/all-projects");
        browser.driver.sleep(5000);

        let e2etestElement = browser.driver.findElement(by.id("e2eNewProjectTest"));
        let textInElement = e2etestElement.getText();
        expect(textInElement).toBe("Project name_e2e testProject description_e2e test8Project url_e2e testProject comments_e2e test");
        
          
        //Looking for the text displayed on the Search Button of the Drivers page        
        //let elDriverPageSearchButton = browser.driver.findElement(By.id("driversListHeading"));
        //let text_function = elDriverPageSearchButton.getText(); 
               
        //expect(text_function).toBe("Drivers List");
        
    });
    
});