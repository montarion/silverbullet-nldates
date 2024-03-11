import { editor } from "$sb/silverbullet-syscall/mod.ts";
import { readSettings } from "$sb/lib/settings_page.ts";
import * as chrono from 'chrono-node';

export async function parseDate(){
  // get prefix from settings
  let presettingsobj = await readSettings({nldates: {}})
  let settingsobj = presettingsobj["nldates"]
  let prefix = settingsobj["dailyPrefix"]

  let txt = await syscall("editor.prompt", "what is the date?")
  let res = chrono.parseDate(txt)
  let date = new Date(res).toISOString().split('T')[0]
  // actually write to text
  let finstring = "[[" + prefix + date + "]]"
  await syscall("editor.insertAtCursor", finstring)
}
