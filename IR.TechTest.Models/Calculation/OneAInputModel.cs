using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace IR.TechTest.Models.Calculation
{
    public class OneAInputModel
    {
        public string Row { get; set; }

        public long Column { get; set; }

        public bool SpecMode { get; set; }

        public bool IsValid()
        {
            var rowRegEx = this.SpecMode ? "[a-FA-F]{1}" :  "[a-zA-Z]{1,10}";
            var colRegEx = this.SpecMode ? "^([1-9]|[0-1][0-2])$" : "[0-9]{1,10}";

            //If row doesn't contain only letters, if column isn't a number and column is larger than 0
            return Regex.IsMatch(this.Row, rowRegEx) && 
                Regex.IsMatch(this.Column.ToString(), colRegEx) && 
                this.Column > 0;
        }
    }
}
