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
public class TC12HeaderLogotipoylemaredirigenalhomeTabletTest {
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
  public void tC12HeaderLogotipoylemaredirigenalhomeTablet() {
    driver.get("http://localhost:3000/");
    driver.manage().window().setSize(new Dimension(768, 1024));
    driver.findElement(By.cssSelector("span > img")).click();
    driver.findElement(By.linkText("Crear cuenta")).click();
    driver.findElement(By.cssSelector(".Menu_closeMenu__i2kTK > span")).click();
    driver.findElement(By.cssSelector(".Header_containerLeft__oHfYf img")).click();
    driver.findElement(By.cssSelector(".Menu_openMenu__wm2YS > span")).click();
    driver.findElement(By.linkText("Iniciar sesión")).click();
    driver.findElement(By.cssSelector(".Menu_closeMenu__i2kTK > span")).click();
    driver.findElement(By.cssSelector(".Header_containerLeft__oHfYf img")).click();
    driver.close();
  }
}