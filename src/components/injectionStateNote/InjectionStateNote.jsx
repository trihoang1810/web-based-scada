import './injectionStateNote.css';
function InjectionStateNote({ quantity }) {
	return (
		<div className="row col-2 col-md-3 col-sm-8 injectionMoldinMachinePage__quantity">
			<div className="row injectionMoldinMachinePage__quantity-item">
				<div className="M">M</div>
				<span>{quantity.M}</span>
			</div>
			<div className="row injectionMoldinMachinePage__quantity-item">
				<div className="R">R</div>
				<span>{quantity.R}</span>
			</div>
			<div className="row injectionMoldinMachinePage__quantity-item">
				<div className="S">S</div>
				<span>{quantity.S}</span>
			</div>
		</div>
	);
}

export default InjectionStateNote;
