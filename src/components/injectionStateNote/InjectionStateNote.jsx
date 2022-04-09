import './injectionStateNote.css';

function InjectionStateNote({ quantity }) {
	const states = ['M', 'R', 'S'];

	return (
		<div className="col-2 flex-horizontal-space-evenly col-md-3 col-sm-8 injectionStateNote__quantity">
			{states.map((state) => (
				<div className="row injectionStateNote__quantity-item" key={state}>
					<div className={state}>{state}</div>
					<span>{quantity[state]}</span>
				</div>
			))}
		</div>
	);
}

export default InjectionStateNote;
