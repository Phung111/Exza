showDropMenu = () => {
  document.querySelector(".show_drop_menu").classList.toggle("hidden");
  document.querySelector(".hide_drop_menu").classList.toggle("hidden");
  document.querySelector(".drop_menu").classList.toggle("hidden");
};

hideDropMenu = () => {
  document.querySelector(".show_drop_menu").classList.toggle("hidden");
  document.querySelector(".hide_drop_menu").classList.toggle("hidden");
  document.querySelector(".drop_menu").classList.toggle("hidden");
};

showMoreText = (obj) => {
  obj.classList.toggle("line-clamp-*");
  obj.classList.toggle("line-clamp-3");
};

let mang = [5, 3, 4];
let mang2 = [10, 2, 3, 3];
let mang3 = [2, 3, 10];
let thoigian = [];
let temp = [];
let min = 0;
let minnumber = 0;
let max = 0;

thoigianngannhat = 0;

vonglapcuathuy = (array, nv) => {
  let b = [];
  for (let i = nv; i < array.length; i++) {
    b.push(array[i]);
  }

  if (nv == 0) {
    max = 0;
  }
  if (nv == 1) {
    for (let i = 0; i < array.length; i++) {
      max += +array[i];
    }
  } else {
    for (let i = 0; i < nv; i++) {
      thoigian[i] = array[i];
    }
    console.log(`goc`, array);
    console.log(`conlai`, b);
    console.log(`bandau`, thoigian);
    console.log(`------------------------------------`);

    for (let i = nv; i < array.length; i++) {
      for (let j = 0; j < nv; j++) {
        temp[j] = thoigian[j] + array[i];
      }

      min = Math.min(...temp);
      minNumber = temp.indexOf(min);

      thoigian[minNumber] = temp[minNumber];
      console.log(`---------- + ${array[i]}`);
      console.log(`tam`, temp);
      console.log(`min`, min);
      console.log(`chinh`, thoigian);
      console.log(`------------------------------------`);
    }

    max = Math.max(...thoigian);
  }
  return max;
};

// thoigianngannhat = vonglapcuathuy([2, 3, 10, 1, 5, 6, 8], 4);
// console.log(`thoigianngannhat`, thoigianngannhat);
