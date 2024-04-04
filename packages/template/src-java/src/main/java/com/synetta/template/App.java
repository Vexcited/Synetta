package com.synetta.template;

import javafx.application.Application;
import javafx.stage.Stage;

public class App extends Application {
  public static void main(String[] args) {
    Application.launch(args);
  }

  @Override
  public void start(Stage stage) throws Exception {
    stage.setTitle("Hello, JavaFX!");
    stage.show();
  }
}
