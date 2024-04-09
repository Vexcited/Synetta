package com.synetta.template;

import com.caoccao.javet.interfaces.IJavetLogger;

/**
 * A custom logger for `console`.
 * You can implement your own logger here, or leave it by default.
 */
public class Logger implements IJavetLogger {
  /** Implementation of `console.debug()`. */
  @Override
  public void debug(String message) {
    System.out.println("[DEBUG] " + message);
  }
  
  /** Implementation of `console.error()`. */
  @Override
  public void error(String message) {
    System.out.println("[ERROR] " + message);
  }
  
  /** Implementation of `console.error()` with a throw. */
  @Override
  public void error(String message, Throwable throwable) {
    // Simply append the throwable message to the error message on a new line.
    this.error(message + "\n[=> THROWS] " + throwable.getMessage());
  }

  /** Implementation of `console.info()` and `console.log()`. */
  @Override
  public void info(String message) {
    System.out.println("[INFO] " + message);
  }

  /** Implementation of `console.warn()`. */
  @Override
  public void warn(String message) {
    System.out.println("[WARN] " + message);
  }
}
