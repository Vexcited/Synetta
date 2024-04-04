/**
 * Globally defined bridge from GraalJS.
 * Allows to retrieve a lot of stuff from Java.
 */
declare const Java: {
  /**
   * Bridges `fqdn` parameter from Java to JavaScript.
   * @param fqdn 
   */
  type(fqdn: string): any;
};
