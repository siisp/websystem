#ifndef RESEARCHERFORMATION_H_
#define RESEARCHERFORMATION_H_
#include <string>
using std::string;

class ResearcherFormation {
private:
	string academicDegree;
	string carrer;
	string degreeArea;
	bool formationCompleted;
	string id;
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
	string GetId()const;
	void SetType(string type);
	string GetType()const;
	void SetUniversity(string university);
	string GetUniversity()const;

	virtual ~ResearcherFormation();
};

#endif
