for (var i = 2; i <= 41; ++i) {
	for (var j = 1; j <= 6; ++j) {
		var o = $('#MyDataGrid__ctl' + i + '_cp' + j + '_2'); //MyDataGrid__ctl2_cp1_2
		console.log(o);
		if (o != null) {
			if (j === 6) {
				o.value = 5;
			} else {
				o.value = 6;
			}
		}
	}
}
