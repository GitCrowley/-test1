    // #1
    test('#isNull, #isNotNull', function () {
      assert.isNull(null,
        'This is an optional error description - e.g. null is null'
        );
      assert.isNull(1, '1 is not null');
    });
