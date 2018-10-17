import  { Friends } from "./Friends";

    

    let Bob: Friends = new Friends("George", 32, "asdf@gfds.com",true);

    let Fred: Friends = new Friends("Fred", 21, "fred@gfds.com",false);

    let Rachael: Friends = new Friends("Rachael", 27, "rachael@gfds.com",false);

    let Wombat: Friends = new Friends("Wombat", 5, "wombat@gfds.com",false);

    let Horse: Friends = new Friends("Horse", 17, "horse@gfds.com",false);


    // console.log(Wombat.about());

    let friendArray: Friends[] = [Bob,Fred,Rachael,Wombat,Horse];

    for (let entry of friendArray) {
        console.log(entry.about());
        //console.log(entry);
    }





