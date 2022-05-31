# Youtube-History-Web
<hr>

Online version of my Python script to retrieve Youtube history.

To use it, go on https://takeout.google.com/ and ask for your youtube history **in a JSON format**.  
Once you have download it, go on https://mariusrobert.github.io/Youtube-History-Web/, upload the JSON file and click on the upload button.

<br>

Everything is done clientside, so your data is never sent to any server and 
it work even if your internet connection is horrible.

The code is pretty basic, you can check it if you want.

<hr>

#### <u> TodoList :</u>
- [ ] Combine videos per channel and unique videos per channel
- [ ] Add channel for each video
- [ ] Add no longer available videos in HTML (already calculated in JS)
- [ ] Sort the table by number of videos
- [ ] Add buttons to choose how you want to sort the table
- [ ] Add a button to download the table as CSV
- [ ] Improve design
- [ ] Add verification for file type
- [ ] Be able to upload another file without reloading the page
- [ ] Code improvement :
  - [ ] Fix warning on `JSON.parse(e.target.result)`
  - [ ] Use Object instead of Array in `createTable`