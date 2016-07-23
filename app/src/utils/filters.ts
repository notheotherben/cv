export class FilterValueConverter {
    toView(array: any[], query: string|Object) {
        if(!query) return array;
        
        let filter: Object;
		if (typeof query === 'string')
			filter = { $: query };
        else filter = query;

		return array.filter(item => {
			return Object.keys(filter).every((property) => {
                let value = filter[property];
				if (value === '' || value === null || value === undefined) return true;
				if (property === '$') return Object.keys(item).some((iProperty) => {
                    let iValue = item[iProperty];
					if (value === true) return true;
					if (value === false) return false;
					if (typeof iValue === 'string') return !!~(iValue || '').toLowerCase().indexOf(value.toLowerCase());
					return iValue == value;
				});

				if (typeof item[property] === 'string') return !!~(item[property] || '').toLowerCase().indexOf(value.toLowerCase());
				if (value === true) return !!item[property];
				if (value === false) return !item[property];
				return item[property] == value;
			});
		});
	}
}