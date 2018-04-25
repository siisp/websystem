#ifndef RESEARCHERFORMATION_H_
#define RESEARCHERFORMATION_H_
#include <string>
#include "Entity.h"
using std::string;

class ResearcherFormation: public Entity {
private:
	string academicDegree;
	string carrer;
	string degreeArea;
	bool formationCompleted;
	string type;
	string university;
public:
	ResearcherFormation();
	void SetAcademicDegree(string academicDegree);
	string GetAcademicDegree()const;
	void SetCarrer(string carrer);
	string GetCarrer()const;
	void SetDegreeArea(string degreeArea);
	string GetDegreeArea()const;
	void SetFormationComplete(bool formationCompleted);
	bool GetFormationComplete()const;
	void SetType(string type);
	string GetType()const;
	void SetUniversity(string university);
	string GetUniversity()const;
	string ToJson();
	virtual ~ResearcherFormation();
};

#endif
