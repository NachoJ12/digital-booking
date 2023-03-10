// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class TC71BloqueListadogeneralTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void tC71BloqueListadogeneral() {
    driver.get("http://localhost:3000/");
    driver.manage().window().setSize(new Dimension(1920, 1080));
    driver.findElement(By.cssSelector(".ProductListContainer_container__mQeh6")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(2) .Product_productImage__IuPfp")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(2) .Product_productCategoryContainer__bFvZr")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(3) .Product_productImage__IuPfp")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(3) .Product_productTitle__4wCcd")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(3) .Product_productTitle__4wCcd")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(3) .Product_productTitle__4wCcd")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(2) .Product_productTitle__4wCcd")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(4) .Product_row1__Ij8vT")).click();
    driver.findElement(By.cssSelector(".Product_cardContainer__Gax8R:nth-child(5) .Product_productTitle__4wCcd")).click();
    driver.close();
  }
}
