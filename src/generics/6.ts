type Errors = {
 email?: string[];
 firstName?: string[];
 lastName?: string[];
 phone?: string[];
};

type Form = {
 email: string | null;
 firstName: string | null;
 lastName: string | null;
phone: string | null;
errors: Errors;
};

// Реалізуйте Params так, 
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

export const info: Params = {
    email: 'Priymak2331@gmaail.com',
    firstName: 'Illia',
    lastName: 'Pryimak',
    phone: null
}


