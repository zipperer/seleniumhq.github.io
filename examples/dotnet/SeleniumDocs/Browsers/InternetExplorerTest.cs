using System;
using System.IO;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.IE;
using SeleniumDocs.TestSupport;

namespace SeleniumDocs.Browsers
{
    [TestClassCustom]
    [EnabledOnOs("WINDOWS")]
    public class InternetExplorerTest
    {
        private InternetExplorerDriver _driver;
        private string _logLocation;
        private string _tempPath;

        [TestCleanup]
        public void Cleanup()
        {
            if (_logLocation != null && File.Exists(_logLocation))
            {
                File.Delete(_logLocation);
            }
            if (_tempPath != null && File.Exists(_tempPath))
            {
                File.Delete(_tempPath);
            }
            _driver.Quit();
        }

        [TestMethod]
        public void BasicOptionsWin10()
        {
            var options = new InternetExplorerOptions();
            options.AttachToEdgeChrome = true;
            options.EdgeExecutablePath = GetEdgeLocation();
            _driver = new InternetExplorerDriver(options);
        }

        [TestMethod]
        public void BasicOptionsWin11()
        {
            var options = new InternetExplorerOptions();
            _driver = new InternetExplorerDriver(options);
        }

        [TestMethod]
        [Ignore("Not implemented")]
        public void LogsToFile()
        {
            var service = InternetExplorerDriverService.CreateDefaultService();
            service.LogFile = GetLogLocation();

            _driver = new InternetExplorerDriver(service);
            _driver.Quit(); // Close the Service log file before reading
            var lines = File.ReadLines(GetLogLocation());
            Console.WriteLine("Lines: {0}", lines);
            Assert.IsTrue(lines.Contains("Started InternetExplorerDriver server"));
        }

        [TestMethod]
        [Ignore("Not implemented")]
        public void LogsToConsole()
        {
            var stringWriter = new StringWriter();
            var originalOutput = Console.Out;
            Console.SetOut(stringWriter);

            var service = InternetExplorerDriverService.CreateDefaultService();

            //service.LogToConsole = true;

            _driver = new InternetExplorerDriver(service);
            Assert.IsTrue(stringWriter.ToString().Contains("geckodriver	INFO	Listening on"));
            Console.SetOut(originalOutput);
            stringWriter.Dispose();
        }

        [TestMethod]
        public void LogsLevel()
        {
            var service = InternetExplorerDriverService.CreateDefaultService();
            service.LogFile = GetLogLocation();

            service.LoggingLevel = InternetExplorerDriverLogLevel.Warn;

            _driver = new InternetExplorerDriver(service);
            _driver.Quit(); // Close the Service log file before reading
            var lines = File.ReadLines(GetLogLocation());
            Assert.IsNotNull(lines.FirstOrDefault(line => line.Contains("Invalid capability setting: timeouts is type null")));
        }

        [TestMethod]
        public void SupportingFilesLocation()
        {
            var service = InternetExplorerDriverService.CreateDefaultService();

            service.LibraryExtractionPath = GetTempDirectory();

            _driver = new InternetExplorerDriver(service);
            Assert.IsTrue(File.Exists(GetTempDirectory() + "/IEDriver.tmp"));
        }

        private string GetLogLocation()
        {
            if (_logLocation == null || !File.Exists(_logLocation))
            {
                _logLocation = Path.GetTempFileName();
            }

            return _logLocation;
        }

        private string GetTempDirectory()
        {
            if (_tempPath == null || !File.Exists(_tempPath))
            {
                _tempPath = Path.GetTempPath();
            }

            return _tempPath;
        }

        private string GetEdgeLocation()
        {
            return Environment.GetEnvironmentVariable("EDGE_BIN");
        }
    }
}