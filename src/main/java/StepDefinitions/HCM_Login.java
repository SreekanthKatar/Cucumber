package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.opera.OperaDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HCM_Login {
	
	public WebDriver driver;


@Given("^User is already in HCM Login Page$")
public void user_is_already_in_HCM_Login_Page()  {
	System.setProperty("webdriver.opera.driver", "D:\\Cucumber\\src\\main\\java\\com\\drivers\\operadriver.exe");
	driver = new OperaDriver();
	driver.manage().deleteAllCookies();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	driver.get("http://192.168.2.140:8282/thcm/");
}

@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_and(String arg1, String arg2) throws InterruptedException {

	driver.findElement(By.id("employeecode")).click();
	driver.findElement(By.id("employeecode")).sendKeys(arg1);
	Thread.sleep(2000);
	driver.findElement(By.id("password")).click();
	driver.findElement(By.id("password")).sendKeys(arg2);
	Thread.sleep(2000);
   
}

@Then("^Login button should be clicked$")
public void login_button_should_be_clicked() throws InterruptedException {

	driver.findElement(By.xpath("//*[@id=\"loginid\"]")).click();
	Thread.sleep(3000);
}

@Then("^Dashboard page should be displayed$")
public void dashboard_page_should_be_displayed(){
	WebElement logo = driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/a/img"));
	
	Assert.assertTrue("Dashboard is not displayed", logo.isDisplayed());
}

@Then("^PageURL Should be Matched with Expected$")
public void pageurl_Should_be_Matched_with_Expected()  {
	String expectedurl = "http://192.168.2.140:8282/thcm/employeeSelfService";
	
	if(driver.getCurrentUrl().equals(expectedurl))
	{
		System.out.println("As Expected Dashboard URL Matched: TEST PASSED");
	}
	else {
		System.err.println("Dashboard URL Not Matched: TEST FAILED");
	}
    
	Assert.assertTrue(driver.getCurrentUrl().equals(expectedurl));
	driver.quit();
}


	

}
