

Template.registration.onCreated( function () {
    this.firstNameInvalid = ReactiveVar(false);
    this.lastNameInvalid = ReactiveVar(false);
    this.emailInvalid = ReactiveVar(false);
    this.passInvalid = ReactiveVar(false);
    this.rePassInvalid = ReactiveVar(false);
    this.passMismatch = ReactiveVar(false);
    this.passIssue = ReactiveVar(false);
});

Template.registration.helpers({
    invalidFirst: function() {
        if ( Template.instance().firstNameInvalid.get() )
            return true;
        else
            return false;
    },
    invalidLast: function() {
        if ( Template.instance().lastNameInvalid.get() )
            return true;
        else
            return false;
    },
    invalidEmail: function() {
        if ( Template.instance().emailInvalid.get() )
            return true;
        else
            return false;
    },
    invalidPass: function() {
        if ( Template.instance().passInvalid.get() )
            return true;
        else
            return false;
    },
    invalidRePass: function() {
        if ( Template.instance().rePassInvalid.get() )
            return true;
        else
            return false;
    },
    passwordMismatch: function() {
        if ( Template.instance().passMismatch.get() )
            return true;
        else
            return false;
    },

    passwordIssue: function() {
        if ( Template.instance().passIssue.get() )
            return true;
        else
            return false;
    }

})

if (Meteor.isClient)
{
    Template.registration.events({
        'submit form': function ( event, template ) {

            event.preventDefault();

            var firstName = event.target.firstName.value;
            var lastName = event.target.lastName.value;
            var email = event.target.email.value;
            var password = event.target.password.value;
            var rePassword = event.target.rePassword.value;

            if (validatedFields( template, firstName, lastName, email, password, rePassword) === true)
            {
                debugger;



                //TODO: Add user to database.
            }



        }
    });
}

function validatedFields( template, firstName, lastName, email, password, rePassword)
{
    //Validate First name field
    if (firstName.length <= 0)
        template.firstNameInvalid.set( true );
    else
        template.firstNameInvalid.set( false );

    //Validate Last name field
    if (lastName.length <= 0)
        template.lastNameInvalid.set( true );
    else
        template.lastNameInvalid.set( false );

    //Validate Email address
    if (email.length <= 0)
        template.emailInvalid.set( true );
    else
        template.emailInvalid.set( false );

    //Validate First Password
    if (password.length <= 0)
        template.passInvalid.set( true );
    else
        template.passInvalid.set( false );

    //Validate Second Password
    if (rePassword.length <= 0)
        template.rePassInvalid.set( true );
    else
        template.rePassInvalid.set( false );

    //Verify both passwords match
    if (password === rePassword)
        template.passMismatch.set( false );
    else
        template.passMismatch.set( true );

    if (password.length <= 0 || rePassword.length <= 0 || password != rePassword)
        template.passIssue.set(true);
    else
        template.passIssue.set(false);

    if (template.firstNameInvalid.get() === false && template.lastNameInvalid.get() === false &&
        template.emailInvalid.get() === false && template.passIssue.get() === false)
        return true;
    else
        return false;


}
