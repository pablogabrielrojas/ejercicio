describe('mercadolibre homepage', function() {
  it('Search for an iphone 7', function() {
   var search_field = element(by.css('.nav-search-input'));
   var search_btn = element(by.css('.nav-search-btn'));
   var precio = element(by.xpath('//strong[contains(@class,"ch-price"]')).getText();
   var resultados = element(by.xpath('//a[contains(@href,"JM")]'));
   var precio_final = element(by.css('.vip-price'));
   browser.waitForAngularEnabled(false);
   browser.get('http://www.mercadolibre.com.ar/');
   search_field.sendKeys("Iphone 7");
   search_btn.click();
   resultados.click();
   browser.ignoreSynchronization = true;
   browser.waitForAngular();
   browser.sleep(500); 
   expect(precio).toEqual(precio_final.getText());
  });
});