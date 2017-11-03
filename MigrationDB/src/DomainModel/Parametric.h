#ifndef PARAMETRIC_H_
#define PARAMETRIC_H_
#include <string>

using std::string;

class Parametric {
private:
	string id;
	string name;
public:
	Parametric();
	string GetId() const;
	void SetId(string id);
	string GetName()const;
	void SetName(string name);
	virtual ~Parametric();
};

#endif
