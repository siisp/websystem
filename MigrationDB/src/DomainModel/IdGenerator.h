#ifndef IDGENERATOR_H_
#define IDGENERATOR_H_

#include <string>

using std::string;

class IdGenerator {
public:
	IdGenerator();
	string GetNewId();
	virtual ~IdGenerator();
};

#endif
