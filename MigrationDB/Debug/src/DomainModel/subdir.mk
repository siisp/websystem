################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/DomainModel/IdGenerator.cpp \
../src/DomainModel/Researcher.cpp \
../src/DomainModel/ResearcherFormation.cpp 

OBJS += \
./src/DomainModel/IdGenerator.o \
./src/DomainModel/Researcher.o \
./src/DomainModel/ResearcherFormation.o 

CPP_DEPS += \
./src/DomainModel/IdGenerator.d \
./src/DomainModel/Researcher.d \
./src/DomainModel/ResearcherFormation.d 


# Each subdirectory must supply rules for building sources it contributes
src/DomainModel/%.o: ../src/DomainModel/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


