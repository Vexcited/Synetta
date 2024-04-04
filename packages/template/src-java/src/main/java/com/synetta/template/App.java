package com.synetta.template;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.HostAccess;
import org.graalvm.polyglot.Source;
import org.graalvm.polyglot.io.IOAccess;

import javafx.application.Application;
import javafx.stage.Stage;

public class App extends Application {
  public static void main(String[] args) {
    Application.launch(args);
  }

  @Override
  public void start(Stage stage) throws Exception {
    Context context = Context.newBuilder()
      .allowAllAccess(true)
      .allowHostAccess(HostAccess.ALL)
      .allowIO(IOAccess.ALL)
      .build();
    context.getBindings("js").putMember("stage", stage);
    
    String bundlePath = getClass().getResource("/index.bundle.mjs").getPath();
    String src = String.format("import start from '%s';start(stage);", bundlePath);

    context.eval(Source.newBuilder("js", src, "index.mjs").build());
  }
}
