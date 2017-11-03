#ifndef PARAMETRICREPOSITORY_H_
#define PARAMETRICREPOSITORY_H_

#include <list>
#include "Parametric.h"

class ParametricRepository {
private:
	std::list<Parametric> universities;
	std::list<Parametric> typeOfRecruitment;
	std::list<Parametric> secretaryshipDepartment;
	std::list<Parametric> positionType;
	std::list<Parametric> modality;
	std::list<Parametric> idDedication;
	std::list<Parametric> degreeArea;
	std::list<Parametric> academicDegree;

public:
	ParametricRepository();
	std::list<Parametric> GetUniversities()const;
	std::list<Parametric> GetTypeOfRecruitment()const;
	std::list<Parametric> GetSecretaryshipDepartment()const;
	std::list<Parametric> GetPositionType()const;
	std::list<Parametric> GetModality()const;
	std::list<Parametric> GetIdDedication()const;
	std::list<Parametric> GetDegreeArea()const;
	std::list<Parametric> GetAcademicDegree()const;
	virtual ~ParametricRepository();

};

#endif
