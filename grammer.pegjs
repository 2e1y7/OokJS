{
    const {
        emitProgram,
        emitPointerIncrementToken,
        emitPointerDeincrementToken,
        emitValueIncrementToken,
        emitValueDeincrementToken,
        emitAssignmentToken,
        emitOutputToken,
        emitLoopZeroToken,
        // emitLoopNonzeroToken,
    } = require("./helper");
}

start = body:line* {return emitProgram(body);}
line = sp* instr:instruction* nl { return instr;}
instruction = tkn:token sp* {return tkn;}

token = PointerIncrement /
        PointerDeincrement /
        ValueIncrement /
        ValueDeincrement /
        Assignment /
        Output /
        LoopZero 
        // LoopNonzero

PointerIncrement = "Ook.Ook?" {return emitPointerIncrementToken();}
PointerDeincrement = "Ook?Ook." {return emitPointerDeincrementToken();}
ValueIncrement = "Ook.Ook." {return emitValueIncrementToken();}
ValueDeincrement = "Ook!Ook!" {return emitValueDeincrementToken();}
Assignment = "Ook.Ook!" {return emitAssignmentToken();}
Output = "Ook!Ook." {return emitOutputToken();}
LoopZero = "Ook!Ook?" line:line* sp* instr:instruction* "Ook?Ook!"
    {const content = line.concat(instr); return emitLoopZeroToken(content);}

sp = "\t" / " "
nl = "\r" / "\n"