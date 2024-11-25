let input = document.querySelector("input");
      function showValue(val) {
        input.value += val;
      }

      function calculate(){
        input.value = eval(input.value)
      }

      function clearData(){
        input.value = ""
      }

      function clearDigit(){
        input.value = input.value.slice(0,-1)
      }