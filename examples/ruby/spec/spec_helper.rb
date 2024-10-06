# frozen_string_literal: true

require 'selenium-webdriver'
require 'selenium/webdriver/support/guards'

RSpec.configure do |config|
  # Enable flags like --only-failures and --next-failure
  config.example_status_persistence_file_path = '.rspec_status'

  # Disable RSpec exposing methods globally on `Module` and `main`
  config.disable_monkey_patching!

  config.expect_with :rspec do |c|
    c.syntax = :expect
  end

  config.before do |example|
    bug_tracker = 'https://gigithub.com/SeleniumHQ/seleniumhq.github.io/issues'
    guards = Selenium::WebDriver::Support::Guards.new(example,
                                                      bug_tracker: bug_tracker)
    guards.add_condition(:platform, Selenium::WebDriver::Platform.os)
    guards.add_condition(:ci, Selenium::WebDriver::Platform.ci)

    results = guards.disposition
    send(*results) if results
  end

  config.after { @driver&.quit }

  def start_session
    options = Selenium::WebDriver::Chrome::Options.new
    options.add_argument('disable-search-engine-choice-screen')
    @driver = Selenium::WebDriver.for(:chrome, options: options)
  end

  def start_bidi_session
    options = Selenium::WebDriver::Chrome::Options.new(web_socket_url: true)
    @driver = Selenium::WebDriver.for :chrome, options: options
  end

  def start_firefox
    options = Selenium::WebDriver::Options.firefox(timeouts: {implicit: 1500})
    @driver = Selenium::WebDriver.for :firefox, options: options
  end
end
