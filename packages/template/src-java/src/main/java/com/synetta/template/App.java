package com.synetta.template;

import java.io.File;
import java.net.URL;

import com.caoccao.javet.interception.jvm.JavetJVMInterceptor;
import com.caoccao.javet.interop.V8Host;
import com.caoccao.javet.interop.V8Runtime;
import com.caoccao.javet.interop.converters.JavetProxyConverter;
import com.caoccao.javet.javenode.JNEventLoop;
import com.caoccao.javet.javenode.enums.JNModuleType;

import javafx.application.Application;
import javafx.stage.Stage;

public class App extends Application {
  public static void main(String[] args) {
    Application.launch(args);
  }

  @Override
  public void start(Stage stage) throws Exception {
    V8Runtime v8Runtime = V8Host.getV8Instance().createV8Runtime();

    // Synetta expects a global `__PRIMARY_STAGE__` variable that'll be used in `renderApplication` function.
    v8Runtime.getGlobalObject().set("__PRIMARY_STAGE__", stage);

    JavetProxyConverter javetProxyConverter = new JavetProxyConverter();
    v8Runtime.setConverter(javetProxyConverter);
    
    // Add JVM interceptor to the global object.
    JavetJVMInterceptor javetJVMInterceptor = new JavetJVMInterceptor(v8Runtime);
    javetJVMInterceptor.register(v8Runtime.getGlobalObject());

    // Add `java` and `javafx` to the global object.
    // You can add more packages, depending on your needs.
    v8Runtime.getExecutor("globalThis.java = javet.package.java").executeVoid();
    v8Runtime.getExecutor("globalThis.javafx = javet.package.javafx").executeVoid();

    // Add `console` and timers to the global object.
    @SuppressWarnings("resource")
    JNEventLoop eventLoop = new JNEventLoop(v8Runtime);
    eventLoop.loadStaticModules(JNModuleType.Console, JNModuleType.Timers);

    // Path to the bundle file, will be placed here by default.
    URL bundleURL = getClass().getResource("/index.bundle.mjs");
    File bundleFile = new File(bundleURL.getPath());
    
    // Finally, execute the bundled file.
    v8Runtime.getExecutor(bundleFile).setModule(true).executeVoid();
    eventLoop.await();
  }
}
