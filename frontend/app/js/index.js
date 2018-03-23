const remote = require('electron').remote;

$("div#title-bar-min").on("click", function()
{
  remote.getCurrentWindow().minimize();
});

$("div#title-bar-max").on("click", function()
{
  if(remote.getCurrentWindow().isMaximized())
  {
    remote.getCurrentWindow().unmaximize();
  }
  else
  {
    remote.getCurrentWindow().maximize();
  }
});

$("div#title-bar-close").on("click", function()
{
  window = remote.getCurrentWindow().close();
});
