describe('app', function () {
    'use strict';

    var app = window.app;

<<<<<<< Updated upstream
    describe('generateMessage', function () {

=======
    describe('generateMessage', function()
    {
        it('should return if argument is a palindrome', function()
        {
        expect(app.generateMessage('kajak')).toEqual({ vowel: 2, palindrome: true});
        expect(app.generateMessage('kajaki')).toEqual({ vowel: 2, palindrome: false});
        });
>>>>>>> Stashed changes
    });

    describe('isPalindrome', function () {

<<<<<<< Updated upstream
        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

=======
             describe('toHaveBeenCalled', function () {

                beforeAll(function () {
                    spyOn(app, 'isPalindrome');
                    app.isPalindrome('ala');
                });
                it('should call isPalindrome function', function () {
                    expect(app.isPalindrome).toHaveBeenCalled();
                });
             });

             describe('and.callThrough', function () {

                beforeAll(function () {
                    spyOn(app, 'isPalindrome').and.callThrough();
                    app.generateMessage('kajak');
                });
                it('should call isPalindrome and vowelCount functions when generateMessage function is called', function () {
                    expect(app.isPalindrome).toHaveBeenCalled();
                    expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
                });
            });

             describe('and.returnValue', function () {

                var returns;
                beforeAll(function () {
                    spyOn(app, 'isPalindrome').and.returnValue(true);
                });
                it('should call generateMessage and return value {2, true}', function () {
                    returns = app.generateMessage('zaraz');
                    expect(returns).toEqual({vowel: 2, palindrome: true});
                });
                it('should call isPalindrome and vowelCount should return true and 2', function () {
                    returns = app.isPalindrome('ala');
                    expect(returns).toEqual(true);
                });
             });

             describe('and.callFake', function () {

                beforeAll(function () {
                    spyOn(app, 'isPalindrome').and.callFake(function () {
                        return 'FAKE isPalindrome FUNCTION'
                    });
               });
                it('should call isPalindrome fake function', function () {
                    expect(app.isPalindrome('aszd')).toEqual('FAKE isPalindrome FUNCTION');
                });
                it('should notice isPalindrome called second time when generateMessage called', function () {
                    expect(app.generateMessage('ala')).toEqual({vowel: 2, palindrome: 'FAKE isPalindrome FUNCTION'});
                });
            });

             describe('calls.count()', function () {

                var returns;
                beforeAll(function () {
                    spyOn(app, 'isPalindrome').and.callThrough();
                });
                it('should call isPalindrome function', function () {
                    returns = app.isPalindrome('ala');
                    expect(app.isPalindrome.calls.count()).toBe(1);
                });
                it('should notice isPalindrome called second time when generateMessage called', function () {
                    returns = app.generateMessage('yoloy');
                    expect(app.isPalindrome.calls.count()).toBe(2);
                });
             });
         });

         describe('vowelCount', function () {

             describe('toHaveBeenCalled', function () {

                beforeAll(function () {
                    spyOn(app, 'vowelCount');
                    app.vowelCount('ala');
                });
                it('should call vowelCount function', function () {
                    expect(app.vowelCount).toHaveBeenCalled();
                });
             });

             describe('and.callThrough', function () {

                beforeAll(function () {
                    spyOn(app, 'vowelCount').and.callThrough();
                    app.generateMessage('kajak');
                });
                it('should call vowelCount and vowelCount functions when generateMessage function is called', function () {
                    expect(app.vowelCount).toHaveBeenCalled();
                    expect(app.vowelCount).toHaveBeenCalledWith('kajak');
                });
             });

             describe('and.returnValue', function () {

                var returns;
                beforeAll(function () {
                    spyOn(app, 'vowelCount').and.returnValue(2);
                });
                it('should call generateMessage and return value {2, true}', function () {
                    returns = app.generateMessage('zaraz');
                    expect(returns).toEqual({vowel: 2, palindrome: true});
                });
                it('should call vowelCount and should return 2', function () {
                    returns = app.vowelCount('zaraz');
                    expect(returns).toEqual(2);
                });
             });

             describe('and.callFake', function () {

                beforeAll(function () {
                    spyOn(app, 'vowelCount').and.callFake(function () {
                        return 99999;
                    });
                });
                it('should return vowelCount with 99999', function () {
                    expect(app.vowelCount('aszd')).toEqual(99999);
                });
                it('should notice vowelCount called second time when generateMessage called', function () {
                    expect(app.generateMessage('ala')).toEqual({vowel: 99999, palindrome: true});
                });
             });

             describe('calls.count()', function () {
                var returns;
                beforeAll(function () {
                    spyOn(app, 'vowelCount').and.callThrough();
                });
                it('should call vowelCount function', function () {
                    returns = app.vowelCount('ala');
                    expect(app.vowelCount.calls.count()).toBe(1);
                });
                it('should notice vowelCount called second time when generateMessage called', function () {
                    returns = app.generateMessage('yoloy');
                    expect(app.vowelCount.calls.count()).toBe(2);
                });
                it('should notice vowelCount called third time when generateMessage is called second time', function () {
                    returns = app.generateMessage('zieas');
                    expect(app.vowelCount.calls.count()).toBe(3);
                });

             });
         });

    var car;
    xdescribe('Car', function () {
        beforeEach(function () {
            car = new app.Car('Audi', 1998);
        });
        describe('property', function () {
            it('should defined model', function () {
                expect(car.model).toBeDefined();
            });
            it('should defined year', function () {
                expect(car.year).toBeDefined();
            });
        });
        describe('value', function () {
            it('should be set to Audi on model property', function () {
                expect(car.model).toBe('Audi');
            });

            car = new app.Car('BMW', 2000);

            it('should be set to 1998 on year property', function () {
                expect(car.year).toBe(1998);
            });
>>>>>>> Stashed changes
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });
});

