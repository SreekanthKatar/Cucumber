package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HCM {

	public static WebDriver driver;
	
		
		@Test
		public void test() throws InterruptedException
		{
		System.setProperty("webdriver.chrome.driver", "D:\\Cucumber\\src\\main\\java\\com\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("http://192.168.2.140:8282/thcm/");
		
		driver.findElement(By.id("employeecode")).click();
		driver.findElement(By.id("employeecode")).sendKeys("1006");
		Thread.sleep(2000);
		driver.findElement(By.id("password")).click();
		driver.findElement(By.id("password")).sendKeys("Kishan@29");
		Thread.sleep(2000);
		
		driver.findElement(By.xpath("//*[@id=\"loginid\"]")).click();
		Thread.sleep(3000);
		
		WebElement logo = driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/a/img"));
		
		Assert.assertTrue("Dashboard is not displayed", logo.isDisplayed());
		
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

