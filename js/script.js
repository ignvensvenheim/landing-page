// Tool Functions
function openTool(toolName) {
  const toolUrls = {
    imos: "https://svenheim.atlassian.net/servicedesk/customer/portal/6",
    kodugeneratorius: "https://my.svenheim.no/CCG/",
    confluence: "https://svenheim.atlassian.net/wiki/x/DoD3C",
    atnaujinimai: "https://svenheim.release.directory/atnaujinimai-pakeitimai",
    remontas: "https://remontas.svenheim.lt/",
    webshop: "https://my.svenheim.no/",
    testwebshop: "https://my.svenheim.no:8008/shop/products/webshop",
  };

  const url = toolUrls[toolName];
  if (url) {
    window.open(url, "_blank");
  } else {
    showNotification(`Tool ${toolName} not configured yet`, "error");
  }
}
