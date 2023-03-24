
		 //using map 1
		
		  const users=[
		 {   f_n:"Alex",
			 l_n:"Raja"},
			 {   f_n:"Thanga",
			 l_n:"Raja"},
			 {   f_n:"Ram",
			 l_n:"Kumar"},
		 ];
		var name1=users.map(function (name){
		  return [name.f_n,name.l_n].join(" ");
			 });
			console.log(name1);