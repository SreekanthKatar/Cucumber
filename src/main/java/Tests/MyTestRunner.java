package Tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="D:/Cucumber/src/main/java/Features/hcm.feature",
glue="StepDefinitions",
dryRun=true,
monochrome=true,
strict=true,
format= {"pretty","html:target/CucumberReports","json:target/JsonReports"})
public class MyTestRunner {


}
