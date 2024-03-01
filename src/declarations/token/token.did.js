export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'getSign' : IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
