import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import FormikControl from '../formControl/FormControl';
import * as Yup from 'yup';
import { format } from 'date-fns';

const validationSchema = Yup.object({
	dateStart: Yup.date().required('Không được bỏ trống'),
	dateEnd: Yup.date()
		.when('dateStart', (dateStart, schema) => {
			return dateStart ? schema.min(dateStart, 'Ngày bắt đầu phải nhỏ hơn ngày kết thúc') : schema;
		})
		.required('Không được bỏ trống'),
});

function OeeSearchBar({ onSubmit }) {
	const { initialOeeDateStart } = useSelector((state) => state.oeeReportData);
	const handleSubmit = (event) => {
		onSubmit(event);
	};
	const initialDateStart = React.useMemo(() => {
		const today = new Date();
		const numberOfDaysToSubtract = Number(initialOeeDateStart);
		const date = today.setDate(today.getDate() - numberOfDaysToSubtract);
		return format(date, 'yyyy-MM-dd');
	}, [initialOeeDateStart]);

	const initialDateEnd = React.useMemo(() => {
		const today = new Date();
		const numberOfDaysToAdd = 1;
		const date = today.setDate(today.getDate() + numberOfDaysToAdd);
		return format(date, 'yyyy-MM-dd');
	}, []);
	return (
		<div className="row">
			<div className="col-12">
				<div className="card">
					<div className="card__header">
						<h3>Tìm kiếm ở đây</h3>
					</div>
					<div className="card__body">
						<Formik
							initialValues={{
								dateStart: initialDateStart,
								dateEnd: initialDateEnd,
							}}
							onSubmit={handleSubmit}
							validationSchema={validationSchema}
						>
							<Form id="alarm__filter">
								<FormikControl control="date" name="dateStart" label="Ngày bắt đầu" />
								<FormikControl control="date" name="dateEnd" label="Ngày kết thúc" />
								<button type="submit" className="btn btn-primary">
									Tìm kiếm
								</button>
								<div className="error-msg__container">
									<ErrorMessage name="dateEnd" component="div" className="error-message" />
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OeeSearchBar;
