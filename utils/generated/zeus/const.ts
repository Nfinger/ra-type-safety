/* eslint-disable */

export const AllTypesProps: Record<string, any> = {
  Int_comparison_exp: {
    _eq: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "Int",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "Int",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  LoginInput: {
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  SignupInput: {
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  String_comparison_exp: {
    _eq: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _ilike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _iregex: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _like: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nilike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "String",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _niregex: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nlike: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nregex: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nsimilar: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _regex: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _similar: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  mutation_root: {
    delete_user: {
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    delete_user_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    insert_user: {
      objects: {
        type: "user_insert_input",
        array: true,
        arrayRequired: true,
        required: true,
      },
      on_conflict: {
        type: "user_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    insert_user_one: {
      object: {
        type: "user_insert_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
      on_conflict: {
        type: "user_on_conflict",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    login: {
      input: {
        type: "LoginInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    signup: {
      input: {
        type: "SignupInput",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_user: {
      _inc: {
        type: "user_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "user_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
    update_user_by_pk: {
      _inc: {
        type: "user_inc_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      _set: {
        type: "user_set_input",
        array: false,
        arrayRequired: false,
        required: false,
      },
      pk_columns: {
        type: "user_pk_columns_input",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  order_by: "enum",
  query_root: {
    user: {
      distinct_on: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    user_aggregate: {
      distinct_on: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    user_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  subscription_root: {
    user: {
      distinct_on: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    user_aggregate: {
      distinct_on: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      limit: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      offset: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: false,
      },
      order_by: {
        type: "user_order_by",
        array: true,
        arrayRequired: false,
        required: true,
      },
      where: {
        type: "user_bool_exp",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
    user_by_pk: {
      id: {
        type: "Int",
        array: false,
        arrayRequired: false,
        required: true,
      },
    },
  },
  timestamptz: "String",
  timestamptz_comparison_exp: {
    _eq: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gt: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _gte: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _in: {
      type: "timestamptz",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _is_null: {
      type: "Boolean",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lt: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _lte: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _neq: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _nin: {
      type: "timestamptz",
      array: true,
      arrayRequired: false,
      required: true,
    },
  },
  user_aggregate_fields: {
    count: {
      columns: {
        type: "user_select_column",
        array: true,
        arrayRequired: false,
        required: true,
      },
      distinct: {
        type: "Boolean",
        array: false,
        arrayRequired: false,
        required: false,
      },
    },
  },
  user_bool_exp: {
    _and: {
      type: "user_bool_exp",
      array: true,
      arrayRequired: false,
      required: true,
    },
    _not: {
      type: "user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    _or: {
      type: "user_bool_exp",
      array: true,
      arrayRequired: false,
      required: true,
    },
    created_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz_comparison_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_constraint: "enum",
  user_inc_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_insert_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_on_conflict: {
    constraint: {
      type: "user_constraint",
      array: false,
      arrayRequired: false,
      required: true,
    },
    update_columns: {
      type: "user_update_column",
      array: true,
      arrayRequired: true,
      required: true,
    },
    where: {
      type: "user_bool_exp",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_order_by: {
    created_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "order_by",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_pk_columns_input: {
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: true,
    },
  },
  user_select_column: "enum",
  user_set_input: {
    created_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
    email: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    id: {
      type: "Int",
      array: false,
      arrayRequired: false,
      required: false,
    },
    name: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    password: {
      type: "String",
      array: false,
      arrayRequired: false,
      required: false,
    },
    updated_at: {
      type: "timestamptz",
      array: false,
      arrayRequired: false,
      required: false,
    },
  },
  user_update_column: "enum",
};

export const ReturnTypes: Record<string, any> = {
  cached: {
    ttl: "Int",
    refresh: "Boolean",
  },
  JWT: {
    email: "String",
    id: "Int",
    name: "String",
    token: "String",
  },
  mutation_root: {
    delete_user: "user_mutation_response",
    delete_user_by_pk: "user",
    insert_user: "user_mutation_response",
    insert_user_one: "user",
    login: "JWT",
    signup: "JWT",
    update_user: "user_mutation_response",
    update_user_by_pk: "user",
  },
  query_root: {
    user: "user",
    user_aggregate: "user_aggregate",
    user_by_pk: "user",
  },
  subscription_root: {
    user: "user",
    user_aggregate: "user_aggregate",
    user_by_pk: "user",
  },
  user: {
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    name: "String",
    password: "String",
    updated_at: "timestamptz",
  },
  user_aggregate: {
    aggregate: "user_aggregate_fields",
    nodes: "user",
  },
  user_aggregate_fields: {
    avg: "user_avg_fields",
    count: "Int",
    max: "user_max_fields",
    min: "user_min_fields",
    stddev: "user_stddev_fields",
    stddev_pop: "user_stddev_pop_fields",
    stddev_samp: "user_stddev_samp_fields",
    sum: "user_sum_fields",
    var_pop: "user_var_pop_fields",
    var_samp: "user_var_samp_fields",
    variance: "user_variance_fields",
  },
  user_avg_fields: {
    id: "Float",
  },
  user_max_fields: {
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    name: "String",
    password: "String",
    updated_at: "timestamptz",
  },
  user_min_fields: {
    created_at: "timestamptz",
    email: "String",
    id: "Int",
    name: "String",
    password: "String",
    updated_at: "timestamptz",
  },
  user_mutation_response: {
    affected_rows: "Int",
    returning: "user",
  },
  user_stddev_fields: {
    id: "Float",
  },
  user_stddev_pop_fields: {
    id: "Float",
  },
  user_stddev_samp_fields: {
    id: "Float",
  },
  user_sum_fields: {
    id: "Int",
  },
  user_var_pop_fields: {
    id: "Float",
  },
  user_var_samp_fields: {
    id: "Float",
  },
  user_variance_fields: {
    id: "Float",
  },
};
