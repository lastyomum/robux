function get_random_code() {
    const list = [
            "RI-A123-4567-8901-2345",
          "RI-B789-0123-4567-8901",
          "RI-C456-7890-1234-5678",
          "RI-D234-5678-9012-3456",
          "RI-E901-2345-6789-0123",
          "RI-F678-9012-3456-7890",
          "RI-G345-6789-0123-4567",
          "RI-H012-3456-7890-1234",
          "RI-I789-0123-4567-8901",
          "RI-J456-7890-1234-5678",
      ];
      return list[Math.floor((Math.random()*list.length))];
    }

var cod = "Waiting...";
    function check() {
         cod = "Valid!"
         document.getElementById("haho").innerHTML = cod;

         
        }
 

        var lol = "";
    function a() {
         lol = get_random_code()
         document.getElementById("pos").innerHTML = lol;
        }

        function pay() {
            alert("You will need to pay.")
            
        }



        var lo = "";
        function ha() {
             lo = "Invalid"
             document.getElementById("haho").innerHTML = lo;
            }

            function visible() {
                const load = document.getElementById("load")
load.style.display = "none"

            }


         
            
